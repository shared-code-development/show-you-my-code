import {solution1} from '../src/code/017';
import * as Tree from '../src/utils/tree'


const case1 = [1,2,3,4,5,6,7];


// 执行测试:
(() => {
  const node1 = Tree.TreeArray.array2BinaryTree(case1)
  solution1(node1)
  // Tree.Traverse.mapForLevel(node1)
})()