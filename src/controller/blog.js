const { exec } = require('../db/mysql');
// 博客列表
const getList = (data) => {
  const { keyword } = data;
  let sql = `select * from userinfo`;
  if (keyword) {
    sql += ` where title like '%${keyword}%' `;
  }
  sql += ` order by createtime desc;`;
  return exec(sql);
};

// 新增一篇博客
const newBlog = (blogData) => {
  const { title, constent, author, createtime } = blogData;
  let sql = `insert into userinfo (title, constent, createtime, author) values ('${title}', '${constent}', '${createtime}', '${author}');`;
  return exec(sql);
};
// 博客内容
const getDtail = (id) => {
  let sql = `select * from userinfo where id=${id} `;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

// 更新一篇博客
const updateBlog = (blogData) => {
  const { title, constent, createtime, author, id } = blogData;
  let sql = `update userinfo set title = '${title}' ,createtime='${createtime}', constent = "${constent}", author="${author}" where id="${id}";`;
  return exec(sql)
};

// 删除一篇博客
const delBlog = (data) => {
  const { id } = data;
  let sql = `delete from userinfo where id in (${id})`;
  return exec(sql).then((delData) => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDtail,
  newBlog,
  updateBlog,
  delBlog,
};
