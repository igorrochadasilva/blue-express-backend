import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { RequestsTypeAcronymEnums } from '../../../enums/request-types-acronym.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';
import { MaintenanceContractEntity } from '../../maintenance-contract/entity/maintenance-contract.entity';
import { DistributorRepresentativesContractEntity } from '../../distributor-representatives-contract/entity/distributor-representatives-contract.entity';
import { SoftwareServiceContractEntity } from '../../software-service-contract/entity/software-service-contract.entity';

@Entity({
  name: 'approvers',
})
export class ApproverEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @ManyToOne(() => UserEntity, (user) => user.approvers)
  user: UserEntity;

  @Column({ nullable: false })
  level: number;

  @Column({ type: 'enum', enum: RequestsTypeAcronymEnums, nullable: false })
  key: RequestsTypeAcronymEnums;

  @Column({ type: 'enum', enum: CompaniesEnums, nullable: false })
  company: CompaniesEnums;

  @Column({ type: 'enum', enum: OfficeTypeEnum, nullable: false })
  office: OfficeTypeEnum;

  @Column({ type: 'decimal', nullable: false })
  competence: number;

  @OneToMany(
    () => MaintenanceContractEntity,
    (maintenanceContracts) => maintenanceContracts.currentApprover,
  )
  maintenanceContracts: MaintenanceContractEntity[];

  @OneToMany(
    () => DistributorRepresentativesContractEntity,
    (distributorRepresentativesContract) =>
      distributorRepresentativesContract.currentApprover,
  )
  distributorRepresentativesContract: DistributorRepresentativesContractEntity[];

  @OneToMany(
    () => SoftwareServiceContractEntity,
    (softwareServiceContract) => softwareServiceContract.currentApprover,
  )
  softwareServiceContract: SoftwareServiceContractEntity[];
}
