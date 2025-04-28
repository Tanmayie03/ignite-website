<template>
  <div
    class="fixed z-50 transition ease-in-out delay-300 border border-gray-300 rounded-lg shadow-xl duration-800 no-scrollbar bg-background h-96 bottom-20 right-5 w-80">
    <div class="p-2 text-lg font-bold text-white bg-primary">Ignito</div>
    <div
      class="h-[300px] relative py-4 bg-center bg-no-repeat bg-contain"
      style="
        background-image: linear-gradient(
            rgba(255, 244, 240, 0.6),
            rgba(255, 244, 240, 0.6)
          ),
          url('https://res.cloudinary.com/dy7zpv1ij/image/upload/v1730971280/chat-bot_1_e8oxrk.png');
      ">
      <div
        class="pb-12 space-y-2 overflow-y-scroll rounded-t-lg no-scrollbar h-72"
        ref="messagesContainer">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="message.from === 'user' ? 'text-right' : 'text-left'">
          <div
            :class="
              message.from === 'user'
                ? ' max-w-[70%] w-fit ml-auto'
                : ' max-w-[70%] w-fit mr-auto'
            ">
            <div class="flex flex-col rounded-md">
              <p class="px-2 font-semibold text-black">
                {{ message.from === "user" ? "You " : "Bot " }}
              </p>
              <p
                :class="
                  message.from === 'user'
                    ? 'bg-primary p-2 mx-2 rounded-l text-white '
                    : 'bg-white p-2 mx-2 rounded-r text-black '
                ">
                {{ message.text }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <input
          v-model="userMessage"
          type="text"
          class="w-full p-2 border rounded outline-none"
          placeholder="Type your message..."
          @keydown.enter="sendMessage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const userMessage = ref("");
const messages = ref([]);
const messagesContainer = ref(null);

const sendMessage = async () => {
  if (userMessage.value.trim() === "") return;

  const message = { text: userMessage.value, from: "user" };
  messages.value.push(message);
  userMessage.value = "";

  await nextTick();
  scrollToBottom();

  try {
    const response = await fetch("http://192.168.38.158:5000/chatbot/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message.text }),
    });

    const data = await response.json();

    messages.value.push({ text: data.reply, from: "chatbot" });

    await nextTick();
    scrollToBottom();
  } catch (error) {
    console.error("Error sending message to chatbot:", error);
  }
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};
</script>
