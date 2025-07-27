function Visualizer2D(canvas, options) {
    Visualizer.call(this);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.beatLengthScale = 2.0;

    this.noteDatas = [];
}

Visualizer2D.prototype = new Visualizer();

Visualizer2D.prototype.render = function() {
    // Clear the canvas
    this.ctx.fillStyle = "#050510";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    var channelColors = {
        melody: ["#ff0000", "#ff8800", "#ff8888"],
        inner1: ["#00ff00", "#88ff00", "#88ff88"],
        inner2: ["#0000ff", "#8800ff", "#8888ff"],
        bass: ["#ff0000", "#ff8800", "#ff8888"],
        percussion: ["#666666"]
    };

    function getFromPrefix(data, str, def) {
        var result = def;
        for (var p in data) {
            if (str.indexOf(p) == 0) {
                result = data[p];
            }
        }
        return result;
    }

    // Draw notes
    for (var i=0; i<this.noteDatas.length; i++) {
        var data = this.noteDatas[i];
        var onEvent = data.onEvent;
        var offEvent = data.offEvent;

        if (!offEvent) {
            continue;
        }

        var x = onEvent.t * this.beatLengthScale;
        var y = onEvent.n;
        var w = this.beatLengthScale * (Math.max(0.05, (offEvent.t - onEvent.t - 0.1)));
        var h = 2;

        var channelName = this.renderChannelNames[onEvent.c];
        var channelIndex = parseInt(channelName.charAt(channelName.length - 1)) - 1;
        var color = getFromPrefix(channelColors, channelName, ["#ffffff"])[channelIndex];

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    // Draw sections
    if (this.sectionTimes) {
        this.ctx.fillStyle = "#ffff00";
        for (var i=0; i<this.sectionTimes.length; i++) {
            var time = this.sectionTimes[i];
            var x = time * this.beatLengthScale;
            this.ctx.fillRect(x, 0, 1, this.canvas.height);
        }
    }

    // Draw current beat
    if (this.mode == VisualizerMode.PLAY) {
        this.ctx.fillStyle = "#ffffff";
        var x = this.currentBeatTime * this.beatLengthScale;
        this.ctx.fillRect(x, 0, 1, this.canvas.height);
    }

};

Visualizer2D.prototype.resized = function(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
};

Visualizer2D.prototype.addRenderData = function(data, length) {
    Visualizer.prototype.addRenderData.call(this, data, length);

    var events = data.events;
    var notesDone = gatherNotesFromEvents(events);

    for (var ch in notesDone) {
        var datas = notesDone[ch];
        addAll(this.noteDatas, datas);
    }
};

Visualizer2D.prototype.resetRenderData = function() {
    Visualizer.prototype.resetRenderData.call(this);
    this.noteDatas = [];
};

Visualizer2D.prototype.step = function(dt) {
};
