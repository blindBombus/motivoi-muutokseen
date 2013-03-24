//This js-file uses Raphaël.js so remember to include it to your webpage

//Draw main health tree visualization
function drawMainTree(municipalityId){
   var mainTree = Raphael("main-tree", 600,500);
   drawRoots(mainTree, municipalityId);
   drawTrunk(mainTree, municipalityId);
   drawBranches(mainTree, municipalityId);

}

function drawRoots(mainTree, municipalityId){
   var rect1 = mainTree.rect(20,30,100,12).attr({fill: "orange"});
}

function drawTrunk(mainTree, municipalityId){
   var rect1 = mainTree.rect(30,40,100,12).attr({fill: "orange"});
}

function drawBranches(mainTree, municipalityId){
   var rect1 = mainTree.rect(40,50,100,12).attr({fill: "orange"});
}
