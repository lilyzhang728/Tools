function IsPopOrder(pushV, popV){
	if (pushV.length<=0 || popV.length<=0 || popV.length!==pushV.length) {return null;}
	if (pushV.length==1) {return pushV[0]===popV[0]?true:false;}
	if (pushV.indexOf(popV[0])==-1) {return false;}
	for(var i=0;i<popV.length-1;i++){
		var index=pushV.indexOf(popV[i]);
		if (pushV[index-1]!=popV[i+1] && pushV.slice(index).indexOf(popV[i+1])==-1) {
			return false;
		} 
		pushV.splice(index,1);
	}
	return true;
}

console.log(IsPopOrder([1,2,3,4,5],[4,5,3,2,1]))