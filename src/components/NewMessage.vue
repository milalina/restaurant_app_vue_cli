<template>
  <div class="new-message">
    <form>
      <label class="new-text" for="new-message">New Message (enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <button v-on:click="addMessage" type="button" class="btn-orange">Enter Message</button>
      <p class="feedback" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import moment from "moment";
import slugify from "slugify";
export default {
  name: "NewMessage",
  props: ["username"],
  data() {
    return {
      newMessage: null,
      feedback: null,
      slug: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        this.slug = slugify(this.username, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection("messages").doc(this.slug).set({
            content: this.newMessage,
            username: this.username,
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
/*addMessage() {
      if (this.newMessage) {
        this.slug = slugify(this.username, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("messages").doc(this.slug);
        db.collection("messages")
          .add({
            content: this.newMessage,
            username: this.username,
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
  }*/


};
</script>

<style scoped>
.new-message{
   justify-content: center;
   margin-top: 10px;
}
.new-text{
  color: darkcyan;
}
button {
  background-color: orange;
  margin-bottom: 30px;
  justify-content: center;
}
.feedback {
  color: orange;
}
form{
  text-align: center;
}
</style>
