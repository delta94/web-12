- Design Backend Service:
    - Nodejs
    - MVC
    - RESTful API

1. Collection, Model:
    - User:
        - Username
        - Password
        - Name
        - Avatar
        - Email
        - Active


- Image:
    - ImageUrl
    - View
    - Like
    - CreatedAt
    - CreatedBy
    - Title
    - Description
    - Active
    - Comments:
        + Content
        + CreatedBy
        + CreatedAt
        + Image

2. Controller
    - CRUD:
        + Create
        + Read
        + Update
        + Delete

3. Router (Chuẩn Restful API) - Link đến controller tương ứng
    - Router server-side không trả về HTML mà chỉ trả về dữ liệu (định dạng JSON, XML)
    - Chuẩn RESTful :
        + Methods:
            GET -> Read : /api/images/ -> Read all images.

            POST -> Create : /api/images/ -> Create new image.
                            /api/images/:id/comments -> Create new comment
                            /api/images/:id/like -> Add like

            PUT -> Update : /api/images/:id -> Update image with id.

            DELETE -> Delete : /api/images/:id -> Delete image
                                /api/images/:imageId/comments/:commentId -> Delete comment
                                /api/images/:id/like -> Delete like

4. Cooked Data (Quyết định trường được phép trả về cho người dùng xem):
    - GET -> User:
            + Username
            + Avatar
            + Name
    - POST -> User:
            + Username
            + Password
            + Name
            + Avatar
            + Email
           -> Image:
           + ImageUrl
           + CreatedBy
           + Title
           + Description