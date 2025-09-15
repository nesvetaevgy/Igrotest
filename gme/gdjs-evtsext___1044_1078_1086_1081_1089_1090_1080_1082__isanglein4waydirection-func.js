
if (typeof gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection !== "undefined") {
  gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection = {};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Right");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__AngleTo4Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 0;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Down");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__AngleTo4Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 1;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Left");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__AngleTo4Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 2;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") == "Up");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__AngleTo4Way.func(runtimeScene, eventsFunctionContext.getArgument("Angle"), eventsFunctionContext) == 3;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


};

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection.func = function(runtimeScene, Angle, Direction, parentEventsFunctionContext) {
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
if (argName === "Angle") return Angle;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt___1044_1078_1086_1081_1089_1090_1080_1082__IsAngleIn4WayDirection.registeredGdjsCallbacks = [];