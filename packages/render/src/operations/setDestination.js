const setDestination = (ctx, node) => {
  if (!node?.props?.id) return;
  
  if (!node?.box) {
    console.error('setDestination: Invalid node or box', { node, box: node?.box });
    return;
  }
  
  ctx.addNamedDestination(node.props.id, 'XYZ', null, node.box.top, null);
};

export default setDestination;