<template>
  <div v-if="isVisible" class="alert-overlay" @click="closeAlert">
    <div class="alert-box" @click.stop>
      <div class="alert-content">
        <p>{{ message }}</p>
        <button class="alert-close-btn" @click="closeAlert">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const closeAlert = () => {
      emit('close')
    }

    return {
      message: props.message,
      isVisible: props.isVisible,
      closeAlert
    }
  }
})
</script>

<style scoped>
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
}

.alert-box {
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.alert-content {
  text-align: center;
}

.alert-content p {
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.5;
}

.alert-close-btn {
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.alert-close-btn:hover {
  background: #0056b3;
}
</style>