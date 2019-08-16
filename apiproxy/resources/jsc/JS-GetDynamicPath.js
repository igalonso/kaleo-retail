//target = context.getVariable('target.url');
realPathSuffix = '/db' + context.getVariable('proxy.pathsuffix');
//pathSuffix = context.getVariable('pathSuffix');
//basepath = context.getVariable('proxy.basepath');
//var target = target + pathSuffix + '.json';

context.setVariable('dynamicPath', realPathSuffix);
