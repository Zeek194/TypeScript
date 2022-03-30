const fun = num => {
  let a = 0;
  for (let i = 0;i < num;i++) {
    for (let j = 0;j < num;j++) {
      a++;
    }
  }
  return a
}

// self 代表当前线程自己
self.onmessage = event => {  // 有人发消息就会执行该事件
  let result = fun(event.data)
  self.postMessage(result)  // 子线程把执行结果发送给主线程
}