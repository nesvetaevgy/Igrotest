
if (typeof gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle !== "undefined") {
  gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle = {};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("ControllerIdentifier")).getChild("Joystick").getChild(eventsFunctionContext.getArgument("JoystickIdentifier")).getChild("Angle").setNumber(eventsFunctionContext.getArgument("Value"));
}}

}


};

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle.func = function(runtimeScene, ControllerIdentifier, JoystickIdentifier, Value, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__SetJoystickAngle.registeredGdjsCallbacks = [];