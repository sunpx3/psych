//layui模块的使用
layui.use([ 'layer', 'jquery' ], function(args) {
	var mod = layui.mod1;

	var indexModel = {

		init : function() {

		},
		openTab : function() {
			layer.open({
				  type: 2,
				  title: 'layer mobile页',
				  shadeClose: true,
				  shade: 0.8,
				  area: ['380px', '90%'],
				  content: '../admin/fileupload.html'
				}); 
		},
		bind : function() {
			W.mvvm.bind(this, 'wrapper-index');
			this.init();
		}
	};
	W.indexModel = indexModel;
	W.indexModel.bind();

	$("#signout").on("click", function() {
		window.location.href = "/console/logout";
	});

});
