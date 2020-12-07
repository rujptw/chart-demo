/*
 * @Date: 2020-11-30 11:44:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-07 15:40:23
 * @FilePath: /chart-demo/demo/src/request.config.ts
 */
import io from 'socket.io-client'

interface wsConfig {
  url?: string
  reconnectionAttempts?: number
  timeout?: number
}

class Socket {
  wsInstace: any = null
  config: wsConfig = {
    url: '',
    reconnectionAttempts: 8,
    timeout: 30000,
  }
  getStatus = (): boolean => (this.wsInstace ? this.wsInstace.connected : false)
  init = (opt: object): void => {
    this.config = { ...this.config, ...opt }
  }
  initWs = (): void => {
    if (this.getStatus()) {
      return this.wsInstace
    } else {
      this.wsInstace = io(this.config)
      this.wsInstace.on('connect', () => {})
      this.wsInstace.on('message', () => {})
      this.wsInstace.on('disconnect', (reason: string) => {})
      this.wsInstace.on('connect_error', (error: object) => {})
      this.wsInstace.on('connect_timeout', (error: object) => {})
      this.wsInstace.on('ping', () => {})
      this.wsInstace.on('pong', (latency: number) => {
        console.log(latency)
      })
      return this.wsInstace
    }
  }
  reconnect = (): void => {
    if (this.wsInstace) {
      if (this.wsInstace.disconnected) {
        this.initWs()
      }
    } else {
      this.initWs()
    }
  }
}

;(function(global): void {
  global.$socket = Socket
})(window)

export { Socket }
