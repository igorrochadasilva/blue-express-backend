import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { ApproverEntity } from '../../approvers/entity/approvers.entity';

@Entity({
  name: 'maintenance_contracts',
})
export class MaintenanceContractEntity {
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

  @ManyToOne(() => UserEntity, (user) => user.approvers)
  requester: UserEntity;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  clientName: string;

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
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  typeContract: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  company: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  status: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  renewStartDate: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  renewEndDate: Date;

  @Column({
    type: 'integer',
    nullable: false,
  })
  contractRenewQtd: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  frequency: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  scope: string;

  @Column({ type: 'integer', nullable: false })
  contractTotalValue: number;

  @Column({ type: 'decimal', nullable: false })
  dollarExchangeRate: number;

  @Column({ type: 'decimal', nullable: false })
  totalValueUSD: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
  })
  gm: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  renewIndexPercentage: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  index: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  paymentCondition: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  inclusionClauses: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  inclusionDescription: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  legalIndemnificationObligations: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  legalWarrantyObligations: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  legalDamageCap: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  legalDamageCave: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: true,
  })
  legalLiquidatedDamages: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: false,
  })
  justify: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  requestId: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  currentLevel: number;

  @ManyToOne(() => ApproverEntity, (approver) => approver.user)
  currentApprover: ApproverEntity;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  author: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  approvalLevel: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  phone: string;

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
  antiCorruption: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  uf: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  sap: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
