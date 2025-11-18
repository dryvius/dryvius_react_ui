import React, { useState } from "react";
import type { TreeNode, TreeProps } from "./type";
import "./style.css";

const Tree: React.FC<TreeProps> = ({ data, onSelect }) => {
    const [treeData, setTreeData] = useState<TreeNode[]>(data);
    const onSelectTreeNode = (node: TreeNode) => {
        const newTreeData = treeData.map(n => {
            if (n.id === node.id) {
                return {
                    ...n,
                    selected: !n.selected,
                };
            }
            return n;
        });
        setTreeData(newTreeData);
        onSelect &&
            onSelect({
                ...node,
                selected: !node.selected,
            });
    };

    return (
        <div className="tree">
            {treeData.map(node => (
                <div key={node.id}>
                    <input type="checkbox" checked={node.selected} onChange={e => onSelectTreeNode(node)} />
                    <span onClick={() => onSelectTreeNode(node)}>{node.label}</span>
                    {node.children && node.children.length > 0 && (
                        <div className="tree-node">
                            <Tree data={node.children} onSelect={onSelect} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Tree;
