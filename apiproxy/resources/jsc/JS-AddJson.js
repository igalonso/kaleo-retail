 //target = context.getVariable('target.url');
dyna = context.getVariable('dynamicPath');
//pathSuffix = context.getVariable('pathSuffix');
//basepath = context.getVariable('proxy.basepath');
//var target = target + pathSuffix + '.json';

context.setVariable('dynamicPath', dyna + '.json');
