const {
  getList,
  getDtail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const { method, path } = req;

  const id = req.query.id;

  // 获取博客列表
  if (method === 'POST' && path === '/api/blog/list') {
    const result = getList(req.body);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // 获取一篇博客的内容
  if (method === 'GET' && path === '/api/blog/detail') {
    const data = getDtail(id);
    return data.then((res) => {
      return new SuccessModel(res);
    });
  }

  // 新增一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    // req.body.author = 'zhangsan'; // 假数据, 待开发登陆时再改成真实数据
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }
  // 更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(req.body);
    return result.then((data) => {
      if (data) {
        return new SuccessModel(result);
      } else {
        return new ErrorModel('更新博客失败');
      }
    });
  }

  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/del') {
    const result = delBlog(req.body);
    return result.then((val) => {
      if (val) {
        return new SuccessModel(result);
      } else {
        return new ErrorModel('删除博客失败');
      }
    });
  }
};

module.exports = handleBlogRouter;
