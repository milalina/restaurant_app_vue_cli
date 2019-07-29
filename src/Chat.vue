<template>
  <div>
    <review-nav-bar />
    <div class="chat container">
      <h2 class="center orange-text">Chat</h2>
      <div class="card">
        <div class="card-content">
          <ul class="messages" v-chat-scroll>
            <li class=" talk-bubble border round tri-right btm-right-in" v-for="message in messages" :key="message.id">
              <span class="talk-text username">{{ message.username + " "}}</span>
              <p class="talk-text grey-text text-darken-3">{{message.content}}</p>
              <span class="talk-text grey-text date">{{message.dateStamp}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-action">
        <NewMessage :username="username" />
      </div>
    </div>
     <app-footer></app-footer>
  </div>
</template>

<script>
import moment from "moment";
import NewMessage from "@/components/NewMessage.vue";
import db from "@/firebase/init.js";
import ReviewNavBar from "@/components/layout/ReviewNavBar.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  name: "Chat",
  props: ["username","email"],
  components: {
    NewMessage,
    ReviewNavBar,
    "app-footer": Footer, 
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            username: doc.data().username,
            content: doc.data().content,
            dateStamp: moment(doc.data().dateStamp).format("LLL")
          });
        }
      });
    });
  }
};
</script>

<style>
li {
  list-style: none;
}

.chat h2 {
  font-size: 2.6em;
  margin-bottom: 10px;
  color: orange;
}

.chat .grey-text {
  color: dimgrey;
  font-size: 1.0em;
}

.chat .date {
  display: block;
  font-size: 0.7em;
  color: darkgrey;
}

.messages {
  max-height: 380px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}

input {
  border: orange;
}
.card{
  border-color: darkcyan;
}
.talk-bubble {
	margin: 10px;
  display: inline-block;
  position: relative;
	width: 260px;
	height: auto;
	background-color: lightgoldenrodyellow;
}
.username{
  font-size: 0.8em;
   color: darkcyan;
}
.border{
border: 8px solid #666;
}
.round{
 border-radius: 30px;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
}
.talk-text{
  margin-left: 9px;
}

/*.tri-right.border.btm-right-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: 10px;
	bottom: -40px;
	border: 20px solid;
	border-color: #666 #666 transparent transparent;
}*/
.tri-right.btm-right-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: 18px;
	bottom: -20px;
	border: 12px solid;
	border-color: lightyellow lightyellow transparent transparent;
}
</style>
