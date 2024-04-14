import "./taxforms.css";

const InputField = ({ inline = false }) => (
  <input
    type="text"
    className="input-field"
    style={{
      width: inline ? "80px" : "100%",
    }}
  />
);

export const TaxForms = () => (
  <div className="taxforms">
    <div className="form-row b lb">
      <div className="col-11">Form 1040 (2018)</div>
      <div className="col-1">Page 2</div>
    </div>
    <div className="form-row b">
      <div className="col-1">
        <div className="bubble l r b t">
          Attach Form(s) W-2. Also attach Form(s) W-2G and 1099-R if tax was
          withheld.
        </div>

        <div className="bubble l r b t">
          Standard Deduction for— • Single or married filing separately, $12,000
          • Married filing jointly or Qualifying widow(er), $24,000 • Head of
          household, $18,000 • If you checked any box under Standard deduction,
          see instructions.
        </div>
      </div>
      <div className="col-11">
        <div className="form-row">
          <div className="col-1 lb">1</div>
          <div className="col-8 lb">
            1 Wages, salaries, tips, etc. Attach Form(s) W-2 . . . . . . . . . .
            . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2 lb">1</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">2a</div>
          <div className="col-2">Tax-exempt interest . . . </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">2a</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
          <div className="col-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b Taxable interest . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">2b</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">3a</div>
          <div className="col-2">Qualified dividends . . . </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">3a</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
          <div className="col-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b Ordinary dividends . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">3b</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">4a</div>
          <div className="col-2">IRAs, pensions, and annuities . </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">4a</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
          <div className="col-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b Taxable amount . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">4b</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">5a</div>
          <div className="col-2">Social security benefits . .</div>
          <div className="col-3 l form-row">
            <div className="l b col-2">5a</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
          <div className="col-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b Taxable amount . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">5b</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">6</div>
          <div className="col-8">
            Total income. Add lines 1 through 5. Add any amount from Schedule 1,
            line 22&nbsp;&nbsp;&nbsp;
            <InputField inline />
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">6</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">7</div>
          <div className="col-8">
            Adjusted gross income. If you have no adjustments to income, enter
            the amount from line 6; otherwise, subtract Schedule 1, line 36,
            from line 6 . . . . . . . . . . . . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">7</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">8</div>
          <div className="col-8">
            Standard deduction or itemized deductions (from Schedule A) . . . .
            . . . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">8</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">9</div>
          <div className="col-8">
            Qualified business income deduction (see instructions) . . . . . . .
            . . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">9</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">10</div>
          <div className="col-8">
            Taxable income. Subtract lines 8 and 9 from line 7. If zero or less,
            enter -0- . . . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">10</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">11</div>
          <div className="col-8">
            a Tax (see inst.) <input type="checkbox" />
            (check if any from: 1 <input type="checkbox" /> Form(s) 8814 2{" "}
            <input type="checkbox" /> Form 4972 3 <input type="checkbox" />
            <InputField inline />
            <br />
            b Add any amount from Schedule 2 and check here . . . . . . . . . .
            . . ▶ <input type="checkbox" />)
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">11</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">12</div>
          <div className="col-8">
            a Child tax credit/credit for other dependents <InputField inline />{" "}
            b Add any amount from Schedule 3 and check here ▶{" "}
            <input type="checkbox" />
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">12</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">13</div>
          <div className="col-8">
            Subtract line 12 from line 11. If zero or less, enter -0- . . . . .
            . . . . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">13</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">14</div>
          <div className="col-8">
            Other taxes. Attach Schedule 4 . . . . . . . . . . . . . . . . . . .
            .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">14</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">15</div>
          <div className="col-8">
            Total tax. Add lines 13 and 14 . . . . . . . . . . . . . . . . . . .
            .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">15</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">16</div>
          <div className="col-8">
            Federal income tax withheld from Forms W-2 and 1099 . . . . . . . .
            . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">16</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">17</div>
          <div className="col-8">
            Refundable credits: a EIC (see inst.) <InputField inline /> b Sch.
            8812 <InputField inline /> c Form 8863 <InputField inline />
            <br />
            Add any amount from Schedule 5 <InputField inline /> . . . . . . . .
            . . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">17</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">18</div>
          <div className="col-8">
            Add lines 16 and 17. These are your total payments . . . . . . . . .
            . . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">18</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row b">
      <div className="col-1">
        <div className="bubble l r b t">
          Refund Direct deposit? See instructions.
        </div>
      </div>
      <div className="col-11">
        <div className="form-row lb">
          <div className="col-1">19</div>
          <div className="col-8">
            If line 18 is more than line 15, subtract line 15 from line 18. This
            is the amount you overpaid . . . .
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">19</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">20a</div>
          <div className="col-8">
            Amount of line 19 you want refunded to you. If Form 8888 is
            attached, check here . . . . ▶ <input type="checkbox" />
            <br />
            ▶ b Routing number <InputField inline /> ▶ c Type: Checking{" "}
            <input type="checkbox" /> Savings <input type="checkbox" />
            <br />
            ▶ d Account number <InputField inline />
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">20a</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">21</div>
          <div className="col-8">
            <div className="form-row">
              <div className="col-7">
                Amount of line 19 you want applied to your 2019 estimated tax ▶
              </div>
              <div className="col-1">21</div>
              <div className="col-2">
                <InputField inline />
              </div>
              <div className="col-2">
                <InputField inline />
              </div>
            </div>
          </div>
          <div className="col-3 l form-row"></div>
        </div>
      </div>
    </div>
    <div className="form-row b">
      <div className="col-1">
        <div className="bubble l r b t">Amount you owe.</div>
      </div>
      <div className="col-11">
        <div className="form-row lb">
          <div className="col-1">22</div>
          <div className="col-8">
            Amount you owe. Subtract line 18 from line 15. For details on how to
            pay, see instructions . . . ▶
          </div>
          <div className="col-3 l form-row">
            <div className="l b col-2">22</div>
            <div className="l b col-8">
              <InputField />
            </div>
            <div className="l b r col-2">
              <InputField />
            </div>
          </div>
        </div>
        <div className="form-row lb">
          <div className="col-1">23</div>
          <div className="col-8">
            <div className="form-row">
              <div className="col-7">
                Estimated tax penalty (see instructions) ▶
              </div>
              <div className="col-1">23</div>
              <div className="col-2">
                <InputField inline />
              </div>
              <div className="col-2">
                <InputField inline />
              </div>
            </div>
          </div>
          <div className="col-3 l form-row"></div>
        </div>
      </div>
    </div>
    <div className="form-row b lb">
      <div className="col-9">
        Go to www.irs.gov/Form1040 for instructions and the latest information.
      </div>
      <div className="col-3">Form 1040 (2018)</div>
    </div>
  </div>
);
