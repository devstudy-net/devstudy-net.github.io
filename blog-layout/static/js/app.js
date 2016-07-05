;$(function(){
	var init = function (){
		$('#loadMore').click(loadMoreComments);	
		$('#search-link').click(gotoSearch);
		$('.reply').click(function(){
			reply($(this).attr('data-name'));
		});
	};

	var loadMoreComments = function () {
		$('#loadMore').addClass('hidden');
		$('#loadIndicator').removeClass('hidden');

		setTimeout (function(){
			$('#loadIndicator').addClass('hidden');
			$('#loadMore').removeClass('hidden');
		}, 1000);
	};

	var gotoSearch = function (){
		$('html, body').animate({
			scrollTop : $('#search').offset().top
		}, 2000);
		$('#search').focus();
	};

	var reply = function (name) {
		$('#commentText').val(name + ', ');
		$('#commentText').focus();
		$('html, body').animate({
			scrollTop : $('#commentText').offset().top
		}, 2000);
	};
	init();
});