function IsBalanced_Solution(pRoot)
{
    // write code here
    function TreeDepth(pRoot)
{
    // write code here
    if (pRoot==null) {return 0;}

	var leftDepth=TreeDepth(pRoot.left);
	var rightDepth=TreeDepth(pRoot.right);

	return (leftDepth>rightDepth)? (leftDepth+1):(rightDepth+1);
}
    
    
    if(pRoot==null){
    	return true;
    }
    var left=TreeDepth(pRoot.left);
    var right=TreeDepth(pRoot.right);
    var diff = Math.abs(left-right);
    if (diff>1) {return false;}
    return IsBalanced_Solution(pRoot.left)&&IsBalanced_Solution(pRoot.right);
}