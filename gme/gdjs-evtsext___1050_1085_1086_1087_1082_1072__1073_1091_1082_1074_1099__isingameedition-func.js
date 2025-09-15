
if (typeof gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition !== "undefined") {
  gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition = {};


gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.userFunc0x82aa08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
eventsFunctionContext.returnValue = game.isInGameEdition && game.isInGameEdition();
};
gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.userFunc0x82aa08(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Кнопка_буквы"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Кнопка_буквы"),
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


gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt___1050_1085_1086_1087_1082_1072__1073_1091_1082_1074_1099__IsInGameEdition.registeredGdjsCallbacks = [];