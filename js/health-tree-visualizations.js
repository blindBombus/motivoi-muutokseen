//This js-file uses Raphaël.js so remember to include it to your webpage

//Draw main health tree visualization
function drawMainTree(municipalityId){
   var mainTree = Raphael("main-tree", 600,500);
   drawBackground(mainTree, municipalityId);
   var trunkStartpoints  = drawRoots(mainTree, municipalityId);
   var branchStartpoints = drawTrunk(mainTree, municipalityId, trunkStartpoints);
   drawBranches(mainTree, municipalityId, branchStartpoints);

}
function drawBackground(mainTree, municipalityId){

}
function drawRoots(mainTree, municipalityId){
   var rect1 = mainTree.rect(20,30,100,12).attr({fill: "orange"});
   return 1;
}

function drawTrunk(mainTree, municipalityId, trunkStartpoints){
   var rect1 = mainTree.rect(30,40,100,12).attr({fill: "orange"});
   return 1;
}

function drawBranches(mainTree, municipalityId, branchStartpoints){
   var rect1 = mainTree.rect(40,50,100,12).attr({fill: "orange"});
}
