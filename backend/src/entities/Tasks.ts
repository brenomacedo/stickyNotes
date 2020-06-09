import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: "tasks"})
class Tasks {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'text'
    })
    description!: string
}

export default Tasks