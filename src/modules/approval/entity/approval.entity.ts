import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { RequestStatusEnums } from '../../../enums/request-status.enum';

@Entity({
  name: 'approvals',
})
export class ApprovalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'integer', nullable: false })
  level: number;

  @ManyToOne(() => UserEntity, (user) => user.approvals)
  user: UserEntity;

  @Column({ type: 'varchar', nullable: false })
  idRequest: string;

  @Column({ type: 'enum', enum: RequestStatusEnums, nullable: false })
  status: RequestStatusEnums;

  @Column({ type: 'varchar', nullable: false })
  justify: string;

  @Column({ type: 'varchar', nullable: false })
  typeRequest: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({ type: 'varchar', nullable: false })
  author: string;
}
