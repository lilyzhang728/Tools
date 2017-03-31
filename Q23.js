function PrintFromTopToBottom(root){
	var queue=[];
	queue.push(root);
	var result=[];

	if (root==null) {
		return result;
	}
	while(queue.length){
		var temp = queue.shift();
		result.push(temp.val);
		if (temp.left) {
			queue.push(temp.left);
		} 
		if (temp.right) {
			queue.push(temp.right);
		}
	}
	return result;
}