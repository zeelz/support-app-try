<template>
  <div class="flex flex-col max-h-screen sm:w-[30rem] bg-[#002866]" :class="{'h-screen': supportType == 'call'}">
    
    <div class="flex justify-center mx-8 py-4">
      <ArrowSmallLeftIcon class="h-6 w-6 text-white font-extrabold mr-auto" />
      <h1 class="text-xl text-center text-white font-medium mr-auto">Support</h1>
    </div>

    <div class="rounded-xl mx-8 bg-blue-700 p-2">
      <button @click="setSupportType('chat')" class="w-1/2 py-2 py-1 text-md font-semibold rounded-xl text-white hover:bg-blue-600" :class="{'bg-blue-500': supportType == 'chat'}">Chat</button>
      <button @click="setSupportType('call')" class="w-1/2 py-2 py-1 text-md font-semibold rounded-xl text-white hover:bg-blue-600" :class="{'bg-blue-500': supportType == 'call'}">Call</button>
    </div>
      
      <!-- hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 -->

      <!-- focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 -->
      
      <!-- <form action="">
        <input type="email" required placeholder="Name" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400">

        <div class="w-40 text-center capitalize shadow-lg bg-blue-700 hover:bg-blue-600 text-white rounded-3xl m-4 px-4 py-2" type="submit">click here</div>
      </form> -->
      <div class="flex flex-col flex-grow__ min-h-full" v-show="supportType == 'chat'">
        <div class="flex mx-8 py-4">
          <div class="relative">
            <img class="h-12 rounded-full sm:mx-0 sm:shrink-0" src="/keme.png">
            <span class="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div class="ml-3">
            <p class="text-white">Mutty</p>
            <p class="text-green-500 text-xs">Customer Care</p>
          </div>
        </div>

        <div class="max-h-[70%] flex-grow__ overflow-y-auto bg-[#001433] rounded-xl p-4" id="chatWrapper">
          <p class="text-center text-xs text-slate-500 py-2">Today</p>

          <div class="flex flex-wrap justify-end">
            <p class="bg-green-400 p-3 rounded-2xl text-sm text-blue-900">When a reactive value is updated then automagically the component</p>
            <p class="basis-full text-right text-xs text-green-500 py-2 lowercase">5:21pm</p>
          </div>

          <div class="flex flex-wrap">
            <p class="bg-blue-900 p-3 rounded-2xl text-sm text-slate-300">Always happy to help, what is it?</p>
            <p class="basis-full text-left text-xs text-green-500 py-2 lowercase">5:21pm</p>
          </div>

          <div class="flex flex-wrap justify-end">
            <p class="bg-green-400 p-3 rounded-2xl text-sm text-blue-900">I have been trying to fund my account but keep getting errors</p>
            <p class="basis-full text-right text-xs text-green-500 py-2 lowercase">8:20pm</p>
          </div>

          <div class="flex flex-wrap">
            <p class="bg-blue-900 p-3 rounded-2xl text-sm text-slate-300">Have you checked with the Admin</p>
            <p class="basis-full text-left text-xs text-green-500 py-2 lowercase">5:21pm</p>
          </div>

          <div class="flex flex-wrap justify-end">
            <p class="bg-green-400 p-3 rounded-2xl text-sm text-blue-900">No, not yet</p>
            <p class="basis-full text-right text-xs text-green-500 py-2 lowercase">2:01pm</p>
          </div>

          <div class="flex flex-wrap">
            <p class="bg-blue-900 p-3 rounded-2xl text-sm text-slate-300">It is most likely an Admin rule</p>
            <p class="basis-full text-left text-xs text-green-500 py-2 lowercase">7:12pm</p>
          </div>

          <ul ref="chatWrapper">
            <li v-for="i in cities" :key="i.id" class="">
              <div class="flex flex-wrap" :class="{'justify-end': i.sender == 'customer'}">
                <p :class="{'bg-green-400 text-blue-900': i.sender == 'customer', 'bg-blue-900 text-slate-300': i.sender == 'agent'}" class="p-3 rounded-2xl text-sm">{{i.name}}</p>
                <p class="basis-full text-xs text-green-500 py-2 lowercase" :class="{'text-right': i.sender == 'customer'}">{{ i.time}}</p>
              </div>
            </li>
          </ul>

        </div>

        <form v-on:submit.prevent="sender" class="flex justify-between items-center px-3 py-4">
          <input type="text" v-model="msg" class="w-full bg-[#001433] text-slate-300 text-sm rounded-2xl p-3 placeholder:text-sm" placeholder="Type a message">
          <button type="submit" class="bg-green-400 hover:bg-green-500 rounded-full p-2 ml-2">
            <ArrowSmallUpIcon class="h-4 w-4 text-blue-900" />
          </button>
        </form>
      </div>

      <div class="flex flex-col flex-grow mx-8" v-show="supportType == 'call'">
          <h1 class="text-xl text-white font-medium py-3">Start a call</h1>
  
          <a  href="tel://08039973902" class="flex items-center text-left p-4 mb-2 bg-blue-800 rounded-xl">
            <PhoneArrowUpRightIcon class="h-6 w-6 text-green-500" />
            <div class="ml-3">
              <p class="text-white">Chinedu</p>
              <p class="text-white text-xs">08039973902</p>
            </div>
          </a>
          <a  href="tel://08039973924" class="flex items-center text-left p-4 mb-2 bg-blue-800 rounded-xl">
            <PhoneArrowUpRightIcon class="h-6 w-6 text-green-500" />
            <div class="ml-3">
              <p class="text-white">Tope</p>
              <p class="text-white text-xs">08039973924</p>
            </div>
          </a>
          <a  href="tel://09189979317" class="flex items-center text-left p-4 mb-2 bg-blue-800 rounded-xl">
            <PhoneArrowUpRightIcon class="h-6 w-6 text-green-500" />
            <div class="ml-3">
              <p class="text-white">Mohammed</p>
              <p class="text-white text-xs">09189979317</p>
            </div>
          </a>
          <a href="tel://08087373909" class="flex items-center text-left p-4 mb-2 bg-blue-800 rounded-xl">
            <PhoneArrowUpRightIcon class="h-6 w-6 text-green-500" />
            <div class="ml-3">
              <p class="text-white">Benita</p>
              <p class="text-white text-xs">08087373909</p>
            </div>
          </a>
        </div>

  </div>
  
</template>

<script>
  useHead({
    bodyAttrs:{
      class: 'bg-slate-950 sm:flex justify-center'
    }
  })

  import { ChatBubbleBottomCenterTextIcon, ArrowSmallLeftIcon, ArrowSmallUpIcon, PhoneArrowUpRightIcon } from "@heroicons/vue/24/outline";

  export default {
    components: {
      ChatBubbleBottomCenterTextIcon,
      ArrowSmallLeftIcon,
      ArrowSmallUpIcon,
      PhoneArrowUpRightIcon,
    },

    data(){
      return {
        msg: '',
        cities: [],
        supportType: 'chat'
      }
    },

    methods: {
      sender(e){
        this.msg && this.cities.push({
          id: Math.random() * 10,
          name: this.msg,
          sender: ['customer', 'agent'][Math.round(Math.random())],
          time: new Date(e.timeStamp + performance.timing.navigationStart).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
        })
        this.msg = ''
        this.scrollDown()
      },

      scrollDown(){
        this.$nextTick(() => this.$refs.chatWrapper.lastElementChild.scrollIntoView())
        // const chatWrapper = document.querySelector('#chatWrapper')
        // chatWrapper.scrollTop = chatWrapper.scrollHeight 
      },
      setSupportType(type){
        this.supportType = type
      }
    }
  }

</script>

<style scoped>
#chatWrapper::-webkit-scrollbar {
  width: 0;
}

  #chatWrapper {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
</style>