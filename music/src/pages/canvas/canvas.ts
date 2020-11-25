const Draw = (canvas: any, width: number, height: number) => {
  // 获取上下文 context 对象
  if(canvas?.getContext) {
    let context=canvas?.getContext('2d');
    context.strokeRect(50,50,50,50);
  }
}

export default Draw;