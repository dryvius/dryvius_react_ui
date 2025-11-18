// tree component type declearation

// tree node interface
export interface TreeNode {
    id: string | number; // unique identifier
    label: string; // tree node display label
    children?: TreeNode[]; // tree node children
    selected: boolean; // whether the node is selected
}

// tree props interface
export interface TreeProps {
    data: TreeNode[]; // tree data
    onSelect: (node: TreeNode) => void; // callback function when a node is selected
}
