
if (typeof gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition !== "undefined") {
  gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition = {};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.userFunc0xcf23e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
eventsFunctionContext.returnValue = game.isInGameEdition && game.isInGameEdition();
};
gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.userFunc0xcf23e8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Джойстик"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Джойстик"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsInGameEdition.registeredGdjsCallbacks = [];