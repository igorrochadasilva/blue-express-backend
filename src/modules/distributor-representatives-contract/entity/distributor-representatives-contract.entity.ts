import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { ApproverEntity } from '../../approver/entity/approver.entity';
import { TypeContractEnums } from '../../../enums/type-contract.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { RequestStatusEnums } from '../../../enums/request-status.enum';
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';
import { TypeRequestOrderEnum } from '../../../enums/type-request-order.enum';

@Entity({
  name: 'distributor_representative_contracts',
})
export class DistributorRepresentativesContractEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: TypeRequestOrderEnum,
    nullable: false,
  })
  typeRequestOrder: TypeRequestOrderEnum;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  nameRepresentativeDistributor: string;

  @Column({ type: 'enum', enum: CompaniesEnums, nullable: false })
  company: CompaniesEnums;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  contact: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  vendor: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  clmHeaderNumber: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  clmLineNumber: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  startContractDate: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  endContractDate: Date;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  commissionPercentage: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  manager: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  uf: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: false,
  })
  observation: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  activity: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  antiCorruption: string;

  @Column({ type: 'enum', enum: TypeContractEnums, nullable: false })
  typeContract: TypeContractEnums;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  requestId: string;

  @ManyToOne(() => UserEntity, (user) => user.approvers)
  requester: UserEntity;

  @Column({
    type: 'integer',
    nullable: false,
  })
  currentLevel: number;

  @Column({ type: 'enum', enum: RequestStatusEnums, nullable: false })
  status: RequestStatusEnums;

  @Column({
    type: 'date',
    nullable: false,
  })
  approvalDate: Date;

  @ManyToOne(() => ApproverEntity, (approver) => approver.user)
  currentApprover: ApproverEntity;

  @Column({ type: 'enum', enum: OfficeTypeEnum, nullable: false })
  approvalLevel: OfficeTypeEnum;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  author: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
