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
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';
import { TypeContractEnums } from '../../../enums/type-contract.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { RequestStatusEnums } from '../../../enums/request-status.enum';
import { CompanyTypeEnums } from '../../../enums/CompanyTypeEnums.enum';

@Entity({
  name: 'software_service_contracts',
})
export class SoftwareServiceContractEntity {
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

  @Column({ type: 'enum', enum: TypeContractEnums, nullable: false })
  typeContract: TypeContractEnums;

  @Column({ type: 'enum', enum: CompanyTypeEnums, nullable: false })
  companyType: CompanyTypeEnums;

  @Column({ type: 'enum', enum: CompaniesEnums, nullable: false })
  company: CompaniesEnums;

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

  @Column({ type: 'enum', enum: RequestStatusEnums, nullable: false })
  status: RequestStatusEnums;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  scope: string;

  @Column({ type: 'decimal', nullable: false })
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

  @Column({ type: 'enum', enum: OfficeTypeEnum, nullable: false })
  approvalLevel: OfficeTypeEnum;

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

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  author: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
