<template>
  <div class="v-keywords" :class="`v-keywords--${inputSize}`">
    <div style="display: contents;">
      <el-tag
        v-for="(tag, index) in value"
        :key="index"
        size="medium"
        type="warning"
        :closable="!inputDisabled"
        :title="tag"
        disable-transitions
        @close="handleClose(tag)"
      >
        <span class="el-select__tags-text">{{ tag }}</span>
      </el-tag>
    </div>
    <el-input
      v-if="inputVisible && isShow"
      ref="inputRef"
      v-model="inputValue"
      :maxlength="maxSize"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @change="handleInputConfirm"
      @blur="inputVisible=false"
    />
    <div
      v-else-if="!inputDisabled && isShow"
      class="v-keywords-action"
      @click="showInput"
    >
      +{{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VKeywords',
  inheritAttrs: false,
  inject: ['elForm'],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    text: {
      type: String,
      default: '关键词'
    },
    maxLength: {
      type: Number
    },
    maxSize: {
      type: Number
    },
    disabled: Boolean
  },
  computed: {
    isShow() {
      if (this.value.length >= this.maxLength) {
        return false
      }
      return true
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
    inputSize() {
      return (this.elForm || {}).size || 'large'
    }
  },
  data() {
    return {
      inputValue: '',
      inputVisible: false
    }
  },
  methods: {
    handleClose(tag) {
      const value = (this.value || []).slice()
      value.splice(value.indexOf(tag), 1)
      this.$emit('input', value)
      if (!this.isShow) {
        this.inputVisible = true
        this.$nextTick(() => {
          this.$refs.inputRef.focus()
        })
      }
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.inputRef.focus()
      })
    },
    handleInputConfirm() {
      const value = (this.value || []).slice()
      if (this.inputValue) {
        value.push(this.inputValue)
      }
      this.inputValue = ''
      this.$emit('input', value)
      if (this.isShow) {
        this.$refs.inputRef.focus()
      } else {
        this.inputVisible = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-keywords {
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
  padding: 2px 0;

  ::v-deep .el-tag {
    display: flex;
    align-items: center;
    max-width: calc(100% - 20px);
    margin: 5px 0 5px 10px;
    height: 26px;
    line-height: 24px;
    font-size: 14px;

    background-color: #FFF9F5;
    border-color: #F67831;
    color: #F67831;

    .el-tag__close.el-icon-close {
      top: 1px;
      flex-shrink: 0;
    }
  }

  ::v-deep .el-input {
    flex: 1;
    height: 32px;
    line-height: 32px;

    .el-input__inner {
      border: 0;
    }
  }

  .v-keywords-action {
    flex: 1;
    cursor: pointer;
    color: #8C8C8C;
    height: 32px;
    line-height: 32px;
    margin: 5px 0 5px 10px;
  }
}

.v-keywords--large {
}
</style>
