import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Chart() {
  /* ... */
  return <DndProvider backend={HTML5Backend}>...</DndProvider>
}

export default Chart;
