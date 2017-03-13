		function queryString(){
			var qs = (location.search.length)>0?location.search.substring(1):"";
			var items = qs.length>0?qs.split("&"):[],
				item=null,
				name=null,
				value=null,
				args={},
				len=items.length;
			for(var i=0;i<len;i++){
				item=items[i].split("=");
				name = decodeURIComponent(item[0]);
				value = decodeURIComponent(item[1]);
				if (name.length) {
					args[name]=value;
				}
			}
			return args;


		}