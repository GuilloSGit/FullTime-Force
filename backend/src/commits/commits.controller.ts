import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
    constructor(private readonly commitsService: CommitsService) { }

    @Get()
    async getCommits() {
        const transformedCommits = await this.commitsService.getCommits();
        return { commits: transformedCommits };
    }
    
}

