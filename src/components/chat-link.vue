<template>
  <div class="link">
    <div class="avatar">
      <img :src="avatar" alt="">
    </div>
    <div class="details">
      <div class="top">
        <span class="title">{{ title }}</span>
        <div class="last_msg_date">{{ last_msg.date }}</div>
      </div>
      <div class="bottom" v-if="isGroup">
        <div class="lastMsgStatus">
          <span class="status" v-if="last_msg.status == 'wait'"></span>
          <span class="status" v-else-if="last_msg.status == 'sent'">
            <svg viewBox="0 0 14 18" width="14" height="18" class="">
              <path
                fill="currentColor"
                d="m12.502 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
              />
            </svg>
          </span>
          <span class="status" v-else-if="last_msg.status == 'received'">
            <svg
              viewBox="0 0 18 18"
              width="18"
              height="18"
              class=""
            >
              <path
                fill="currentColor"
                d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
              />
            </svg>
          </span>
          <span class="status" v-else-if="last_msg.status == 'seen'">
            <svg viewBox="0 0 18 18" width="18" height="18" class="">
              <path
                fill="currentColor"
                d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
              />
            </svg>
          </span>
        </div>
        <div class="lastMsgSender" v-if="last_msg.type != 'notification'">
          <span>{{ last_msg.sender }}</span>
        </div>
        <div class="lastMsgBody">
          <span class="lastMsg" v-if="last_msg.type == 'text' || last_msg.type == 'notification'">{{ last_msg.text }}</span>
          <span class="lastMsg" v-else-if="last_msg.type == 'audio'">{{ last_msg.duration }}</span>
          <span class="lastMsg" v-else-if="last_msg.type == 'img'">Photo</span>          
          <span class="lastMsg" v-else-if="last_msg.type == 'video'">Video</span>          
        </div>
        <div v-if="isPinned">
          
        </div>
      </div>
      <div class="bottom" v-else>
        <div class="lastMsgStatus">
          <span class="status" v-if="last_msg.status == 'wait'"></span>
          <span class="status" v-else-if="last_msg.status == 'sent'"></span>
          <span class="status" v-else-if="last_msg.status == 'received'"></span>
          <span class="status" v-else-if="last_msg.status == 'seen'"></span>
        </div>
        <div class="lastMsgBody">
          <span class="lastMsg" v-if="last_msg.type == 'text' || last_msg.type == 'notification'">{{ last_msg.text }}</span>
          <span class="lastMsg" v-else-if="last_msg.type == 'audio'">{{ last_msg.duration }}</span>
          <span class="lastMsg" v-else-if="last_msg.type == 'img'">Photo</span>          
          <span class="lastMsg" v-else-if="last_msg.type == 'video'">Video</span>          
        </div>
        <div v-if="isPinned">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { boolean } from 'yargs';

  export default {
    name: "chat-link",
    props: {
      avatar: String,
      isGroup: boolean,
      isPinned: boolean,
      hasUnreadMessage: boolean,
      title: String,
      last_msg: Object,
    }
  };
</script>