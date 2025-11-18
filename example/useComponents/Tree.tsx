import { Tree, type TreeNode } from "../../packages";

export default function UseTree() {
    const data: TreeNode[] = [
        {
            id: "1",
            label: "parent-1",
            selected: false,
            children: [
                {
                    id: "1-1",
                    label: "child-1-1",
                    selected: false,
                    children: [{ id: "1-1-1", label: "child-1-1-1", selected: false }],
                },
            ],
        },
        {
            id: "2",
            label: "parent-2",
            selected: true,
            children: [
                {
                    id: "2-1",
                    label: "child-2-1",
                    selected: true,
                    children: [{ id: "2-1-1", label: "child-2-1-1", selected: true }],
                },
            ],
        },
    ];

    return (
        <div>
            <Tree data={data} onSelect={node => console.log(node)} />
        </div>
    );
}
