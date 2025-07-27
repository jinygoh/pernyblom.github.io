var VisualizerMode = {
    PLAY: 0,
    PAUSE: 1,
    STOP: 2
};




function Visualizer() {
    this.mode = VisualizerMode.STOP;
    this.currentBeatTime = 0;
    this.currentStopBeatTime = 0;
    this.minBeat = 0;
    this.maxBeat = 1;
    this.focusBeat = 0;

    this.sectionTimes = null;
    this.songStructureInfo = null;
}

Visualizer.prototype.updateSectionFramework = function() {
};

Visualizer.prototype.setSectionInfos = function(times, structure) {
    this.sectionTimes = times;
    this.songStructureInfo = structure;
    this.updateSectionFramework();
    return this;
};

Visualizer.prototype.setMode = function(mode) {
    this.mode = mode;
//    switch (mode) {
//        case VisualizerMode.STOP:
//            this.clearHighlightNotes();
//            break;
//    }
    return this;
};


Visualizer.prototype.render = function() {
};

Visualizer.prototype.step = function(dt) {
};

Visualizer.prototype.setCurrentPlayBeatTime = function(beatTime) {
    this.currentBeatTime = beatTime;
//    logit(" someone setting beat time " + beatTime);
    return this;
};


Visualizer.prototype.addRenderData = function(data, beatOffset) {
};

Visualizer.prototype.resetRenderData = function() {
    this.mode = VisualizerMode.STOP;
    this.minBeat = 0;
    this.maxBeat = 1;
};
