	$(document).ready(function(){
		//当滚动条发生滚动
		$(window).scroll(function(){
			var top = $(document).scrollTop();
			var menu = $("#menu");
			var items = $("#content").find(".item");//jquery 通过id筛选效率高
			
			var currentId =""; //当前所在楼层ID
			items.each(function(){
				var m = $(this);
				var itemTop = m.offset().top;
				//console.log(itemTop); 固定值
				if(top > itemTop-300){
					currentId = "#" + m.attr("id");
				} else{
					return false;
				}
			});

			//给相应楼层添加样式
			var currentLink = menu.find(".current");
			if(currentId && currentLink.attr("href") != currentId){
				currentLink.removeClass("current");
				menu.find("[href=" + currentId + "]").addClass("current");
			}
		});
	});