// 載入所需套件
const commentService = require('../services/commentService')

const commentController = {
  // 新增留言
  postComment: (req, res) => {
    commentService.postComment(req, res, data => {
      if (data.status === 'success') {
        return res.redirect(`/restaurants/${req.body.restaurantId}`)
      }
    })
  },

  // 刪除留言
  deleteComment: (req, res) => {
    commentService.deleteComment(req, res, data => {
      if (data.status === 'success') {
        return res.redirect('back')
      }
    })
  },
}

// commentController export
module.exports = commentController