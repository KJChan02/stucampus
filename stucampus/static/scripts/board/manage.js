$(document).ready(function(){
	$(".btn-top").click(function(){
		ele = this;
		$.ajax({
			type:"POST",
			url:"/board/top/",
			data:{uid:this.name},
			success:function(){
				if($(ele).hasClass("btn-warning")){
					$(ele).removeClass("btn-warning");
					$(ele).addClass("btn-info");
					$(ele).html("置顶");
				}
				else{
					$(ele).removeClass("btn-info");
					$(ele).addClass("btn-warning");
					$(ele).html("取消置顶");
				}
			}
		});
	});

	$(".btn-show").click(function(){
		ele = this;
		$.ajax({
			type:"POST",
			url:"/board/show/",
			data:{uid:this.name},
			success:function(){
				if($(ele).hasClass("btn-warning")){
					$(ele).removeClass("btn-warning");
					$(ele).addClass("btn-info");
					$(ele).html("发布");
				}
				else{
					$(ele).removeClass("btn-info");
					$(ele).addClass("btn-warning");
					$(ele).html("撤下");
				}
			}
		});
	});
});