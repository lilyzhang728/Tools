/*	快排：先设置一个中间元素，在数组的头部和尾部分别设置指针，移动指针直到头
	指针大于等于中间元素，尾指针小于等于中间元素，交换两位置的值，直到头指针
	大于尾指针停止。此时头指针前面的元素都小于中间元素（因为若有大于头指针的
	元素过不去）。再分别把头指针左边的子数组和右边的子数组做同样的事。*/
	function quickSort(array){
		quick(array,0,array.length-1);

		function quick(array,left,right){
			var index;
			if (array.length>1) {
				index = partition(array,left,right);
				if (left<index-1) {
					quick(array,left,index-1);
				}
				if (right>index) {
					quick(array,index,right);
				}
			}
		} 

		function partition(array,left,right){
			var pivot = array[Math.floor((left+right)/2)],
				i=left,
				j=right;

			while(i<=j){
				while(array[i]<pivot){
					i++;
				}
				while(array[j]>pivot){
					j--;
				}
				if (i<=j) {
					swap(array,i,j);
					i++;
					j--;
				}
			}
			return i;
		}

		function swap(array,para1,para2){
			var temp=array[para1];
			array[para1] = array[para2];
			array[para2] = temp;
		}
	}