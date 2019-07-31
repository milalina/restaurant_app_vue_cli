<template>
  <div class="new-message">
    <form>
      <label class="new-text" for="new-message">New Message (enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p class="feedback" v-if="feedback">{{ feedback }}</p>
    </form>
    <div>
      <button v-on:click="addMessage" type="button" class="btn-orange">Enter Message</button>
      </div>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import moment from "moment";
import slugify from "slugify";
export default {
  name: "NewMessage",
  props: ["email"],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages").add({
            content: this.newMessage,
            email: this.email,
            dateStamp: Date.now()
        })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message in order to send one";
      }
    }
  }
};
</script>

<style scoped>
.new-message{
   justify-content: center;
   text-align: center;
   margin-top: 10px;
}
.new-text{
  color: darkcyan;
}
button {
  background-color: orange;
  margin-bottom: 50px;
  margin-top: 10px;
}
.feedback {
  color: orange;
}
form{
  text-align: center;
}
input{
  border: solid 2px orange;
  width: 100%;
}
</style>
