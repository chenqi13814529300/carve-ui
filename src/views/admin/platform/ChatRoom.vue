<template>
  <div style="padding: 10px; margin-bottom: 50px">
    <el-row>
      <el-col :span="4">
        <el-card style="width: 300px; height: 300px; color: #333">
          <div style="padding-bottom: 10px; border-bottom: 1px solid #ccc">
            在线用户<span style="font-size: 12px"
              >（点击聊天气泡开始聊天）</span
            >
          </div>
          <div
            style="padding: 10px 0"
            v-for="user in users"
            :key="user.username"
          >
            <span>{{ user.username }}</span>
            <i
              class="el-icon-chat-dot-round"
              style="margin-left: 10px; font-size: 16px; cursor: pointer"
              @click="chatUser = user.username"
            ></i>
            <span
              style="font-size: 12px; color: limegreen; margin-left: 5px"
              v-if="user.username === chatUser"
              >chatting...</span
            >
          </div>
        </el-card>
      </el-col>

      <el-col :span="20">
        <div
          style="
            width: 800px;
            margin: 0 auto;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px #ccc;
          "
        >
          <div style="text-align: center; line-height: 50px">
            Web聊天室（{{ chatUser }}）
          </div>
          <div
            style="height: 350px; overflow: auto; border-top: 1px solid #ccc"
            v-html="content"
          ></div>
          <div style="height: 200px">
            <textarea
              v-model="text"
              style="
                height: 160px;
                width: 100%;
                padding: 20px;
                border: none;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                outline: none;
              "
            ></textarea>
            <div style="text-align: right; padding-right: 10px">
              <el-button type="primary" size="mini" @click="send"
                >发送</el-button
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
let socket;

export default {
  name: "chatRoom",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      user: {},
      isCollapse: false,
      users: [],
      chatUser: "",
      text: "",
      messages: [],
      content: "",
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 发送信息的方法-----start
    send() {
      // 发送信息肯定要选择发送对象，可能是人可能是群，检验对象是通过this.chatUser
      if (!this.chatUser) {
        this.$message({ type: "warning", message: "请选择聊天对象" });
        return;
      }
      // 而且发送信息要有内容
      if (!this.text) {
        this.$message({ type: "warning", message: "请输入内容" });
      } else {
        if (typeof WebSocket == "undefined") {
          console.log("您的浏览器不支持WebSocket");
        } else {
          console.log("您的浏览器支持WebSocket");
          // 组装待发送的消息 json
          // {"from": "zhang", "to": "admin", "text": "聊天文本"}
          // 你发送信息这操作封装成一个对象     发送者   接收者    发送信息
          let message = {
            from: this.user.username,
            to: this.chatUser,
            text: this.text,
          };
          // 将组装好的json发送给服务端，由服务端进行转发
          socket.send(JSON.stringify(message));
          // 这里是想把发送者发送的内容保存到messages中
          this.messages.push({ user: this.user.username, text: this.text });
          // 构建消息内容，本人消息
          this.createContent(null, this.user.username, this.text);
          this.text = "";
        }
      }
    },
    //  发送信息的方法--------end


// 构建消息-------start
    createContent(remoteUser, nowUser, text) {
      // 这个方法是用来将 json的聊天消息数据转换成 html的。
      let html;
      // 当前用户消息
      if (nowUser) {
        // nowUser 表示是否显示当前用户发送的聊天消息，绿色气泡
        html =
          '<div class="el-row" style="padding: 5px 0">\n' +
          '  <div class="el-col el-col-22" style="text-align: right; padding-right: 10px">\n' +
          '    <div class="tip left">' +
          text +
          "</div>\n" +
          "  </div>\n" +
          '  <div class="el-col el-col-2">\n' +
          '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
          '    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="聊天内容" style="object-fit: cover;">\n' +
          "  </span>\n" +
          "  </div>\n" +
          "</div>";
      } else if (remoteUser) {
        // remoteUser表示远程用户聊天消息，蓝色的气泡
        html =
          '<div class="el-row" style="padding: 5px 0">\n' +
          '  <div class="el-col el-col-2" style="text-align: right">\n' +
          '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
          '    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="聊天内容" style="object-fit: cover;">\n' +
          "  </span>\n" +
          "  </div>\n" +
          '  <div class="el-col el-col-22" style="text-align: left; padding-left: 10px">\n' +
          '    <div class="tip right">' +
          text +
          "</div>\n" +
          "  </div>\n" +
          "</div>";
      }
      // html聊天语句渲染的html内容被保存下来
      this.content += html;
      console.log(this.content);
    },
// 构建消息----------end

    
    init() {
      // 获取当前登录用户
      this.user = sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user"))
        : {};
      console.log(this.user);
      let username = this.user.username;
      let _this = this;

      // 连接-------- start
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        // 请求后端@ServerEndpoint(value = "/imserver/{username}")
        let socketUrl = "ws://localhost:9000/imserver/" + username;
        if (socket != null) {
          socket.close();
          socket = null;
        }
        // 开启一个websocket服务
        socket = new WebSocket(socketUrl);
        //打开事件
        socket.onopen = function () {
          console.log("websocket已打开");
        };
        //连接---------end

        //  浏览器端收消息，获得从服务端发送过来的文本消息
        socket.onmessage = function (msg) {
          console.log("收到数据====" + msg.data);
          let data = JSON.parse(msg.data); // 对收到的json数据进行解析， 类似这样的： {"users": [{"username": "zhang"},{ "username": "admin"}]}
          if (data.users) {
            // 获取在线人员信息
            _this.users = data.users.filter(
              (user) => user.username !== username
            ); // 获取当前连接的所有用户信息，并且排除自身，自己不会出现在自己的聊天列表里
          } else {
            // 如果服务器端发送过来的json数据 不包含 users 这个key，那么发送过来的就是聊天文本json数据
            //  // {"from": "zhang", "text": "hello"}
            console.log(_this.messages);
            _this.messages.push({});
            if (data.from === _this.chatUser) {
              _this.messages.push(data);
              // 构建消息内容
              _this.createContent(data.from, null, data.text);
            } else {
            }
          }
        };
        //关闭事件
        socket.onclose = function () {
          console.log("websocket已关闭");
        };
        //发生了错误事件
        socket.onerror = function () {
          console.log("websocket发生了错误");
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tip {
  color: white;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  padding: 10px;
  width: auto;
  display: inline-block !important;
  display: inline;
}

.right {
  background-color: deepskyblue;
}
.left {
  background-color: forestgreen;
}
</style>
