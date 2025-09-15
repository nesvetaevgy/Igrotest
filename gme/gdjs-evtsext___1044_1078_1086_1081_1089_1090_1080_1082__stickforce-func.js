
if (typeof gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce !== "undefined") {
  gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce = {};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = Math.max(0, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("ControllerIdentifier")).getChild("Joystick").getChild(eventsFunctionContext.getArgument("JoystickIdentifier")).getChild("Force").getAsNumber() - gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__DeadZone.func(runtimeScene, eventsFunctionContext.getArgument("ControllerIdentifier"), eventsFunctionContext.getArgument("JoystickIdentifier"), eventsFunctionContext)) / (1 - gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__DeadZone.func(runtimeScene, eventsFunctionContext.getArgument("ControllerIdentifier"), eventsFunctionContext.getArgument("JoystickIdentifier"), eventsFunctionContext));}}

}


};

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce.func = function(runtimeScene, ControllerIdentifier, JoystickIdentifier, parentEventsFunctionContext) {
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
if (argName === "ControllerIdentifier") return ControllerIdentifier;
if (argName === "JoystickIdentifier") return JoystickIdentifier;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__StickForce.registeredGdjsCallbacks = [];