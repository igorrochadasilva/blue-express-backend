import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../../enums/role.enum';
import { ApproverEntity } from '../../approver/entity/approver.entity';
import { MaintenanceContractEntity } from '../../maintenance-contract/entity/maintenance-contract.entity';
import { DistributorRepresentativesContractEntity } from '../../distributor-representatives-contract/entity/distributor-representatives-contract.entity';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({
    length: 63,
  })
  name: string;

  @Column({
    length: 128,
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    length: 128,
  })
  department: string;

  @Column({
    length: 128,
  })
  position: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  birthAt?: Date;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
  @Column({
    default: Role.User,
  })
  role: number;

  @OneToMany(() => ApproverEntity, (approver) => approver.user)
  approvers: ApproverEntity[];

  @OneToMany(
    () => MaintenanceContractEntity,
    (maintenanceContract) => maintenanceContract.requester,
  )
  maintenanceContract: MaintenanceContractEntity[];

  @OneToMany(
    () => DistributorRepresentativesContractEntity,
    (distributorRepresentativesContract) =>
      distributorRepresentativesContract.requester,
  )
  distributorRepresentativesContract: DistributorRepresentativesContractEntity[];

  @OneToMany(() => ApproverEntity, (approval) => approval.user)
  approvals: ApproverEntity[];
}
