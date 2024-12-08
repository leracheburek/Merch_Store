import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react';

function Chart() {
  /* ... */
  return <DndProvider backend={HTML5Backend}>...</DndProvider>
}

export default Chart;
