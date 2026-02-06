import { Progress } from "@heroui/progress";

export default function SkillsBar({ skill, icon, value }: { skill: string, icon: React.ReactNode, value: number }) {
    return (
        <div className="flex items-center gap-4 mt-4">
            {icon}
            <p className="text-xs w-15">{skill}</p>
            <Progress
                className="max-w-50"
                color="primary"
                size="sm"
                value={value}
            />
        </div>
    );
}