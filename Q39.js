function TreeDepth(pRoot){
	if (pRoot==null) {return 0;}

	var leftDepth=TreeDepth(pRoot.left);
	var rightDepth=TreeDepth(pRoot.right);

	return (leftDepth>rightDepth)? (leftDepth+1):(rightDepth+1);
}